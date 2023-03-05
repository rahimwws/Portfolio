import gitHub  from "./gitHub-black.svg";

export const GitHubBtn = (props) => {
  return (
    <a href={props.link} className="btn-outline" target={"_blank"} rel="noreferrer">
      <img src={gitHub} alt="" />
      GitHub repo
    </a>
  );
};
