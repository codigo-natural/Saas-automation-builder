import EditorProvider from "@/providers/editor-provider";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <div></div>
      </EditorProvider>
    </div>
  );
};

export default page;
