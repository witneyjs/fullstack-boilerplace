import { h, Fragment } from "preact";
import { HOME_ROUTE } from "@lib/common/routes/home";
import styles from "./notHome.module.scss";

const NotHome = function({ data, router }) {
  return (
    <Fragment>
      <button
        class={styles.button}
        onClick={() => {
          router.navigate(HOME_ROUTE);
        }}
      >
        Go to home
      </button>
      <hr />
      <form method="post">
        <input name="name" value={data.postLabel} size={100} />
        <button type="submit">Send</button>
      </form>
      <hr />
      <img src="/peter-osmenda-1224249-unsplash.wbc.jpg" height="500" />
      <img src="/peter-osmenda-X2gePOvpgRE-unsplash.jpg" height="500" />
    </Fragment>
  );
};

export default NotHome;
