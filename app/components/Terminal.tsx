export default function Terminal() {
  return (
    <div className="mockup-window m-10 border bg-base-300">
      <div className="flex justify-start bg-base-200 px-4 py-16">
        <div className="flex flex-col">
          <p>{"> Hi, I'm Blu. Tell me about yourself"}</p>
          <p>
            {"> "}
            <input
              type="text"
              className="border-0 bg-transparent focus:outline-none"
              placeholder=""
            />
          </p>
        </div>
      </div>
    </div>
  );
}
