import { useMemo, useState, useRef } from 'react';
import { useStarforceHistoryArray } from '../context/starforceContext';
import { getCostInfoFromStarforceHistory } from '../lib/util/starforceUtility';
import { useTable, useFilters, useSortBy } from 'react-table';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLoading } from '../context/loadingContext';
import { Skeleton } from '@mui/material';
import { useUserInfo } from '../context/userInfoContext';
import { useContentError } from '../context/contentErrorContext';
import MasterToolTip from '../ui/MasterToolTip';
import { useCapture } from '../lib/hooks/useCapture';
import { MasterPrimaryButton } from '../ui/MasterPrimaryButton';
import MasterSnackBar from '../ui/MasterSnackBar';
import ImageCard from '../ui/ImageCard';
import PeriodSelectPanel from './PeriodSelectPanel';
import { formatNumberToKorean } from '../lib/util/generalUtility';

function CheckboxColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const [selectAll, setSelectAll] = useState(false);

  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setFilter(selectAll ? [] : options);
  };

  return (
    <div className='flex flex-col space-y-2'>
      <label>
        <input type='checkbox' checked={selectAll} onChange={toggleSelectAll} />{' '}
        전체 선택
      </label>
      {options.map((option, i) => (
        <label key={i}>
          <input
            type='checkbox'
            checked={filterValue?.includes(option) || false}
            onChange={(e) => {
              const array = filterValue || [];
              if (e.target.checked) {
                setFilter([...array, option]);
              } else {
                setFilter(array.filter((value) => value !== option));
              }
            }}
          />{' '}
          {option}
        </label>
      ))}
    </div>
  );
}

function Table({ columns, data }) {
  const [showFilters, setShowFilters] = useState({});
  const defaultColumn = useMemo(
    () => ({
      Filter: CheckboxColumnFilter,
      filter: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return filterValue.includes(rowValue);
        });
      },
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, defaultColumn }, useFilters, useSortBy);

  return (
    <table {...getTableProps()} className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-black font-bold text-white border-b-2 border-white '>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.key}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(
                  column.id === 'meso' ? column.getSortByToggleProps() : {}
                )}
                key={column.key}
                className='px-6 py-3 text-left text-xs text-white uppercase tracking-wider'
              >
                {column.render('Header')}

                {column.id === 'meso' ? (
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ' -'}
                  </span>
                ) : (
                  <div className='relative inline-block text-left'>
                    <button
                      onClick={() =>
                        setShowFilters({
                          ...showFilters,
                          [column.id]: !showFilters[column.id],
                        })
                      }
                      className='ml-2 w-[20px] h-[20px]'
                    >
                      <FilterListIcon />
                    </button>
                    {showFilters[column.id] && column.canFilter ? (
                      <div className='origin-top-right absolute font-regular text-white right-0 mt-2 left-10 w-56 rounded-md shadow-lg bg-n2 ring-1 ring-black ring-opacity-5'>
                        <div
                          className='py-1'
                          role='menu'
                          aria-orientation='vertical'
                          aria-labelledby='options-menu'
                        >
                          {column.render('Filter')}
                        </div>
                      </div>
                    ) : null}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.key}>
              {row.cells.map((cell, i) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    key={cell.key}
                    className={`px-6 h-full py-10 whitespace-nowrap text-sm text-white font-regular border-1 border-b border-white ${
                      i % 2 === 0 ? 'bg-n2' : 'bg-n1'
                    }`}
                  >
                    {typeof cell.value === 'number' ? (
                      <div>
                        {cell.value.toLocaleString()}
                        <br />
                        <span className='text-xs'>
                          {`(${formatNumberToKorean(cell.value)})`}
                        </span>
                      </div>
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const TableSkeleton = () => {
  return (
    <table>
      <tbody>
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <td key={colIndex}>
                <Skeleton
                  variant='rect'
                  width={colIndex === 0 ? 550 : 350}
                  height={rowIndex === 0 ? 68 : 118}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function UsedMesoPanel() {
  const [starforceHistoryArray] = useStarforceHistoryArray();
  const [userInfo] = useUserInfo();
  const [isLoading] = useLoading();
  const [errorText] = useContentError();
  const tableRef = useRef(null);
  const capture = useCapture(tableRef);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const columns = useMemo(
    () => [
      {
        Header: '아이템',
        accessor: 'item',
      },
      {
        Header: '캐릭터명(서버)',
        accessor: 'character',
      },
      {
        Header: '사용 메소량',
        accessor: 'meso',
        disableFilters: true,
      },
    ],
    []
  );

  let itemsAndCost = useMemo(() => {
    if (starforceHistoryArray.length === 0) return;
    return Array.from(
      getCostInfoFromStarforceHistory(
        starforceHistoryArray,
        userInfo.startDate,
        userInfo.endDate
      )
    );
  }, [starforceHistoryArray, userInfo.startDate, userInfo.endDate]);

  return (
    <div>
      {errorText === '' && isLoading && <TableSkeleton />}
      {errorText === '' && !isLoading && itemsAndCost && (
        <div>
          <div className='mb-5 pt-10 text-[24px] flex flex-col'>
            <div className='text-white font-regular text-[12px] ml-3'>
              * 스타포스 정보는 최대 5분 후 반영됩니다.
              <br />* 2023년 12월 27일 이후의 데이터만 조회 가능합니다.
            </div>
            <PeriodSelectPanel />
            <span className='mr-2 flex gap-2 items-center'>
              <MasterToolTip
                text='130레벨 이상의 아이템만 지원합니다.
              슈페리얼 아이템은 현재 미지원 입니다.
              이외 일부 아이템은 지원하지 않을 수 있습니다.'
                placement='bottom-end'
              />
              <span className='text-y4 font-bold text-[20px]'>유의사항</span>
            </span>
            <div>
              <span className='text-white font-bold'>{`${userInfo.startDate
                .toISOString()
                .slice(0, 10)}`}</span>
              <span className='font-regular text-white'> 부터 </span>
              <span className='text-white font-bold'>{`${userInfo.endDate
                .toISOString()
                .slice(0, 10)}`}</span>
              <span className='font-regular text-white'>
                {' '}
                까지 사용한 총 메소는{' '}
              </span>
              <span className='text-y4 font-bold'>
                {`${itemsAndCost
                  .reduce((c, cv) => c + cv[1], 0)
                  .toLocaleString()} `}
              </span>
              <span className='font-regular text-white'>메소 입니다.</span>
            </div>
          </div>
          <div className='flex justify-end mb-5'>
            <MasterPrimaryButton
              text='이미지 복사'
              color='r2'
              onClick={() => {
                capture(tableRef.current);
                setIsSnackBarOpen(true);
              }}
            />
          </div>
          <div ref={tableRef} className='overflow-auto'>
            <Table
              columns={columns}
              data={itemsAndCost.map((element) => {
                let convertedKey: string = element[0].split('|');
                return {
                  item: (
                    <div className='flex flex-col justify-center items-center'>
                      <div className='mb-3 font-regular'>{convertedKey[0]}</div>
                      <ImageCard
                        imageUrl={convertedKey[2]}
                        width={50}
                        height={57}
                      />
                    </div>
                  ),
                  character: convertedKey[1],
                  meso: element[1],
                };
              })}
            />
          </div>
          <MasterSnackBar
            open={isSnackBarOpen}
            onClose={() => setIsSnackBarOpen(false)}
            message='클립보드에 복사되었습니다.'
          />
        </div>
      )}
    </div>
  );
}
