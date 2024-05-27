import { useModal, Modal, IntroVideoModalContents } from "./modal";

export default function VideoBook() {
  return (
    <video className="h-full w-full rounded-lg" controls>
      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}