import { useMaterailDrop } from '../../hooks/useMaterialDrop';
import { CommonComponentProps } from '../../interface';

const Container = ({ id, styles, children }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterailDrop(['Button', 'Container'], id);

  return (
    <div
      data-component-id={id}
      ref={drop}
      className={`min-h-[100px] p-[20px] ${
        canDrop ? 'border-[2px] border-[blue]' : 'border-[1px] border-[#000]'
      }`}
      style={styles}
    >
      {children}
    </div>
  );
};

export default Container;
