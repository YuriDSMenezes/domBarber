import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import * as S from './styles';

interface ComponentProps {
  list: Array<object>;
}

interface PaginatedItemsProps {
  itemsPerPage: number;
  items: Array<object>;
  component: React.ComponentType<ComponentProps>;
}

export const PaginatedItems = ({
  itemsPerPage,
  items,
  component: Component,
}: PaginatedItemsProps) => {
  const [currentItems, setCurrentItems] = useState(items);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // @ts-ignore
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <S.Container>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      <Component list={currentItems} />
    </S.Container>
  );
};
