import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/scss/thread.scss";

import { useLogged } from "../hooks/uselogged";
import { useThread } from "../hooks/useThreadData";
import API from "../requests";

function sendMessage(elem: any, threadIdx: string) {
  API.sendMessage({
    access: localStorage.access,
    topicId: +threadIdx,
    messageText: elem.target.value,
  }).then((r) => {
    if (r) {
      Swal.fire({
        title: "Сообщение отправлено",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        position: "top-end",
      }).then(() => window.location.reload());
    }
  });
}

const Thread = () => {
  let { thread_id } = useParams();

  thread_id = `${thread_id}`;
  const threadData = useThread(thread_id);
  const logged = useLogged();

  return (
    <section className={"thread"}>
      <h2 className="thread__title">{threadData.topic.topicName}</h2>
      <span className="thread__author">Автор: {threadData.topic.user}</span>

      <h3>Сообщения</h3>

      {threadData.messages.map((elem) => (
        <div className="thread__message">
          <h4 className="thread__message-title">{elem.user}</h4>
          <span className="thread__message-text">{elem.messageText}</span>
        </div>
      ))}
      <form
        action="#"
        className="thread__input-form"
        onSubmit={(e) => {
          e.preventDefault();
        // @ts-ignore
          sendMessage(e, thread_id);
        }}
      >
        <input
          disabled={!logged}
          className="thread__message-input"
          type="text"
          placeholder="Написать сообщение"
        />
        <button type={"submit"}>Отправить</button>
      </form>
    </section>
  );
};

export default Thread;
