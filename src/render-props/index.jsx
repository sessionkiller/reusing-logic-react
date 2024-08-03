import { useEffect, useState } from "react";

function DataFetcher({url, render}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, [url]);

  return render(data)

}

export default DataFetcher;
