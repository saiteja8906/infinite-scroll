# Infinite Scroll: Seamless Content Loading

_Automatically calls next Offset values when we scroll_


## Install
npm i infinite-scrolling-js


## License

MIT

## Usage

Infinite Scroll operates within a designated container element, requiring the addition of a useRef hook to the last element. This useRef hook facilitates the detection of the last element's appearance on the browser viewport, triggering a callback function when the next offset values are present.

``` HTML

const { lastElementRef } = useInfiniteScroll(
    pageNumber,
    setPageNumber,
    hasMore,
    apiCall,
    records 
  );

pageNumber: A state variable representing the current page number, managed by useState.
setPageNumber: A function to set the current page number.
hasMore: A boolean value indicating whether there is a next offset available.
apiCall: A function triggered when scrolling reaches the end of the content.
records: A state variable representing the current offset records, managed by useState

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
## Browser support
Google Chrome: Version 51 and later
Mozilla Firefox: Version 55 and later
Microsoft Edge: Version 15 and later
Safari: Version 12.1 and later (though it has partial support in earlier versions)
