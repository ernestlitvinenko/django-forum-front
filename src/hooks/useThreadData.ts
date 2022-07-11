import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../requests";
import { ResponseThread } from "../requests/interfaces";

export const useThread = (thread_id: string) => {

  const [threadData, setThreadData] = useState<ResponseThread>({
    topic: {
      id: 0,
      topicName: "",
      user: "",
    },
    messages: [],
  });

  const [threadIdx, setThreadIdx] = useState<number>(+thread_id)

  const updateThread = (threadIdx: number) => {
    API.getThread(threadIdx).then(
      r => setThreadData(r.response))
  }

  useEffect(() => {
    if (!thread_id) { 
      window.location.href="/";
      return
    }
      updateThread(+thread_id)}, [thread_id])

  return threadData
}

