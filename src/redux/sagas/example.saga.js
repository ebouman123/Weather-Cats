import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchExamples() {
  try {
    yield put({
      type: "SET_EXAMPLES",
      payload: "examplePayload",
    });
  } catch (error) {
    console.error("fetchExamples error:", error);
  }
}

function* exampleSaga() {
  yield takeEvery("FETCH_EXAMPLE", fetchExamples);
}

export default exampleSaga;
