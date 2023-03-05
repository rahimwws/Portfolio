import { Header } from "./../components/Header/Header";
export const Home = () => {
  return (
    <>
      <Header></Header>

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, ReactJS, HTML, CSS, NPM, BootStrap, TailwindCSS</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MongoDB</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
