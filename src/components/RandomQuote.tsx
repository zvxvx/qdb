const RandomQuote = ({ collection }: { collection: any }) => {
  function rQuoteMaker() {
    const rNum = Math.floor(Math.random() * collection.length);
    const rQuote = collection[rNum];
    return window.location.assign(`/quotes/${rQuote.id}`)
  }
  return (
    <button onClick={rQuoteMaker} className="dark:text-neutral-100 text-neutral-900">random</button>
  )

}

export default RandomQuote