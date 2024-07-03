import Image from "next/image";
import ViewSource from "../../components/view-source";
import mountains from "../../public/mountains.jpg";

const PlaceholderBlur = () => (
  <div>
    <ViewSource pathname="app/placeholder/page.tsx" />
    <h1>带占位符模糊的图像组件</h1>
    <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      width={700}
      height={475}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  </div>
);

export default PlaceholderBlur;
