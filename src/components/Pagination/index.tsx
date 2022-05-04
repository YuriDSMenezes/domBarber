/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [itemCurrent, setItemCurrent] = useState<number>(1);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemCurrent(event.selected + 1);
    setItemOffset(newOffset);
  };

  return (
    <S.Container>
      <ReactPaginate
        pageRangeDisplayed={2}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        // renderOnZeroPageCount={null}
      />
      <S.PageCount>
        {itemCurrent} de {pageCount}
      </S.PageCount>
      <Component list={currentItems} />
    </S.Container>
  );
};
