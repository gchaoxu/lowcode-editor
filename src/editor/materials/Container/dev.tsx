import { useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { useMaterailDrop } from '../../hooks/useMaterialDrop';
import { CommonComponentProps } from '../../interface';

const Container = ({ id, name, styles, children }: CommonComponentProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { canDrop, drop } = useMaterailDrop(['Button', 'Container', 'Modal', 'Table'], id);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, drag] = useDrag({
    type: name,
    item: {
      type: name,
      dragType: 'move',
      id,
    },
  });

  useEffect(() => {
    drop(divRef);
    drag(divRef);
  }, []);

  return (
    <div
      data-component-id={id}
      ref={divRef}
      className={`min-h-[100px] p-[20px] ${canDrop ? 'border-[2px] border-[blue]' : 'border-[1px] border-[#000]'}`}
      style={styles}
    >
      {children}
    </div>
  );
};

export default Container;
