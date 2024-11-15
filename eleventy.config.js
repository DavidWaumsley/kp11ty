export default async function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

	return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};