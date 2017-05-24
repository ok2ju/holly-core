import ws from './ws';

export default function* rootSaga() {
  yield [
    ws(),
  ];
}
