import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";
import { EditorCanvas } from "./_components/EditorCanvas";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default page;
