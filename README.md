# Infinite Scroll: Seamless Content Loading

_Automatically calls next Offset values when we scroll_


## Install
npm i infinite-scrolling-js


## License

MIT

## Usage

Infinite Scroll works on a container element , we need to add a useRef hook to the last element so when this element appears it will trigger a callback function if the next offset values are present

``` HTML

const { lastElementRef } = useInfiniteScroll(
    pageNumber,  // current page number which is a useState variable
    setPageNumber, // set current page number 
    hasMore, // boolean value which will be true when there is next offset available
    apiCall, // function to be triggered when scroll to the end 
    records // current offset records which is a useState variable 
  );

{records.map((record, index) => {
        if (records.length === index + 1) {
          return (
            // adding a ref to the last element
            <div ref={lastElementRef} key={record}>  
              {record}
            </div>
          );
        } else {
          return <div key={record}>{record}</div>;
        }
})}

```

### Options

``` js
currentPage,
setCurrentPage,
hasMore = false,
callBackAPI,
isLoading = false

```
