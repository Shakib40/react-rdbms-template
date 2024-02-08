export function QueryBuilder(builder) {
  return (
    builder.query({
      query: (URL) => URL
    })
  );
}

export function QueryMutation(builder) {
  return (
    builder.mutation({
      query: ({ URL, method, body }) => ({
        url: URL,
        method: method,
        body: body
      })
    })
  );
}