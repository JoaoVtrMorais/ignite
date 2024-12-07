import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="João"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro magni veniam eum error dicta suscipit, maiores dolores cupiditate, earum rem similique, quo nisi quae. Doloribus, perspiciatis. Perspiciatis ipsam culpa ratione?"
          />
          <Post 
            author="Diego Fernandes" 
            content="Um novo post muito legal!" 
          />
        </main>
      </div>
    </div>
  );
}
