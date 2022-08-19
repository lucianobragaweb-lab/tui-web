type SuggestionItem = {
  label: string,
  value: string
}

interface Suggestion {
  category: string,
  label: string,
  items: SuggestionItem[]
}

export default Suggestion
