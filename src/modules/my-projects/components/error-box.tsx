import { tw } from "twind";

export default function ProjectListError({ error }: { error: any }) {
  console.warn(error);
  return (
    <div class={tw("mt-8")}>
      <h1 class={tw("text-3xl")}>Oops!!</h1>
      <h2 class={tw("font-mono mt-5")}>
        Something went wrong while fetching my projects list!
      </h2>
      <pre
        class={tw("font-mono bg-gray-200 px-6 py-4 mt-2 rounded text-gray-600")}
      >
        {JSON.stringify(error)}
      </pre>
    </div>
  );
}
