import recipes from "./_recipes";

export function get() {
  return {
    body: recipes,
  };
}
