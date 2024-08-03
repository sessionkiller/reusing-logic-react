import { useEffect, useState } from "react";

function withDataFetching(WrappedComponent, url) {
    return function(props){
      const [data, setData] = useState(null);

      useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((responseData) => setData(responseData));
      }, [url]);

      return <WrappedComponent data={data} {...props} />
    }

}

export default withDataFetching;
