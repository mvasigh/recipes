import recipes from "./_recipes";

export function get() {
  console.log("handling request...");

  return {
    body: recipes,
  };
}
