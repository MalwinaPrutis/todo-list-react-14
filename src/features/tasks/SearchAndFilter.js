import Section from "../../common/Section";
import { Input } from "./styledSearch";
import searchQueryParamName from "./searchQueryParamName";
import useQueryParameter from "./useQueryParameter";
import useReplaceQueryParameter from "./useReplaceQueryParameter";

const SearchAndFilter = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    return (
        <Section
            title="Wyszukiwarka"
            body={
                <Input
                    id="searchInput"
                    name="search"
                    value={query}
                    onChange={({ target }) =>
                        replaceQueryParameter(searchQueryParamName, target.value)
                    }
                    placeholder="Filtruj zadania"
                />
            }
        />
    );
};

export default SearchAndFilter;