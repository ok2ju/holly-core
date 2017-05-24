import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import {
  WS_OPEN_CONNECTION_PENDING,
  WS_OPEN_CONNECTION_SUCCESS,
  WS_OPEN_CONNECTION_FAIL,
  WS_CLOSE_CONNECTION,
  ERROR_RECEIVED,
} from '../actions';

function connect() {
  const socket = io('http://localhost:8022');
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('app error', (data) => {
      emit({ type: ERROR_RECEIVED, payload: data });
      console.log(data);
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* flow() {
  try {
    const socket = yield call(connect);
    yield put({ type: WS_OPEN_CONNECTION_SUCCESS });

    const task = yield fork(read, socket);

    yield take(WS_CLOSE_CONNECTION);
    yield cancel(task);
  } catch (error) {
    yield put({ type: WS_OPEN_CONNECTION_FAIL, payload: error });
  }
}

export default function () {
  return [
    takeLatest(WS_OPEN_CONNECTION_PENDING, flow),
  ];
}
