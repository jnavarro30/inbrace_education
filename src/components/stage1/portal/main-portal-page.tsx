import { Image } from "@mantine/core";

function PortalReview() {
  return (
    <div className="text-white m-4">
      <h1 className="text-center m-4 text-lg font-bold">Portal Review</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis
        illum aperiam sunt nulla ratione corrupti assumenda culpa. Quae, numquam
        tenetur magni obcaecati officiis similique, dolorum fugit rem
        dignissimos possimus ducimus ab neque, aliquid voluptate repellat
        voluptates ea? Inventore quae dolorem unde impedit? Itaque, fugiat eius
        tenetur omnis facere magnam maxime, ipsa doloremque voluptates eligendi,
        est soluta? Quod aliquam, sapiente consequuntur laboriosam rerum neque
        accusantium laborum hic excepturi cum ullam recusandae ad. Deleniti
        minus, libero itaque enim totam consequatur dolore dolor tempora alias
        quo magnam molestias blanditiis maiores consequuntur, iure nulla amet?
        Minus qui ad, quos iusto ex temporibus neque!
      </p>
      <div style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}>
        <Image
          radius="md"
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="Random unsplash image"
        />
      </div>
    </div>
  );
}

export default PortalReview;
