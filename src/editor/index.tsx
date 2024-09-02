import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import { Header } from './components/Header';
// 画布区
import { EditArea } from './components/EditArea';
// 属性编辑区
import { Setting } from './components/Setting';
// 物料区
import { Material } from './components/Material';

export default function ReactPlayground() {
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="h-[60px] flex items-center border-b-[1px] border-[#000]">
        <Header />
      </div>
      <Allotment>
        <Allotment.Pane preferredSize={240} maxSize={300} minSize={200}>
          <Material />
        </Allotment.Pane>
        <Allotment.Pane>
          <EditArea />
        </Allotment.Pane>
        <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
          <Setting />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}
