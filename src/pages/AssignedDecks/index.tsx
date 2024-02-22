import Page from "@/components/custom/Page";
import { FaHome } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import Loader from "@/components/custom/Spin";
import { SearchBar } from "@/components/custom/SearchBar/SearchBar";
import { CollectionCard } from "@/components/custom/CollectionCard";
import { queryProps } from "@/types";
import { useGetAllAssignDecks } from "@/hooks/deckAssign/query";
import NoDataFound from "@/components/custom/NoDataFound";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

const AssignedDecks = () => {
  const [keyword, setKeyword] = useState<string>("");
  // get all assigned decks
  const {
    data: allDecks,
    isLoading,
    isFetching,
    refetch,
  }: queryProps = useGetAllAssignDecks({
    query: {
      keyword: keyword,
    },
  });

  useEffect(() => {
    refetch();
  }, [keyword]);

  const action = (val: string) => setKeyword(val);

  const debounceSearch = debounce(action, 400);

  return (
    <>
      <Page
        title="Decks"
        breadcrumbs={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "Decks",
            path: "/decks",
            icon: <MdCollections />,
          },
        ]}
      >
        <div className="tabs mt-3 lg:mt-5">
          <SearchBar
            handleChange={(e: any) => debounceSearch(e.target.value)}
          />
          <div>
            <h2 className="font-semibold">In Progress</h2>
            {allDecks?.data ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
                {allDecks?.data?.map((item: any, idx: number) => (
                  <CollectionCard item={item} deckNo={idx + 1} />
                ))}
              </div>
            ) : (
              <NoDataFound />
            )}
          </div>
        </div>
        {(isLoading || isFetching) && <Loader />}
      </Page>
    </>
  );
};

export default AssignedDecks;
