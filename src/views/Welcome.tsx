export default function Welcome() {
  return (
    <div className=" dark:bg-slate-800 h-100 min-h-screen ">
      <div className="text-center mx-auto pt-40 px-10">
        <div className=" text-3xl text-white">Welcome to setup project</div>
        <br />
        <span className=" text-slate-400">
          Setup your project and move to some utitilites functions and method
          are built in this source code{" "}
        </span>
        <br />
        <br />
        <div className=" text-white">
          Github Source:{" "}
          <a
            className="text-blue-600"
            href="https://github.com/appsaeed/project-setup/tree/vite-react-ts"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/appsaeed
          </a>
        </div>
      </div>
    </div>
  );
}
