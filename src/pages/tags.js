import { useState } from "react";

const tags = ["dev", "javascript", "begginer"];

const TagsPage = () => {
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <div>
      <BlogTags
        tags={tags}
        selectedTag={selectedTag}
        onSelect={setSelectedTag}
      />
      <FilteredBlogTags tags={tags} selectedTag={selectedTag} />
    </div>
  );
};

const BlogTags = (props) => {
  const { tags, selectedTag, onSelect } = props;

  return (
    <div className="flex gap-2">
      {tags.map((tag, index) => {
        const isSelected = tag === selectedTag;
        const handleSelect = () => {
          onSelect(tag);
        };

        return (
          <div
            className={`${
              isSelected ? "bg-red-400" : "bg-red-200"
            } py-2 px-4 rounded-lg w-fit cursor-pointer`}
            key={index}
            onClick={handleSelect}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};

const FilteredBlogTags = (props) => {
  const { tags, selectedTag } = props;

  const filteredTags = tags.filter((tag) => {
    if (tag === selectedTag) {
      return true;
    }
  });

  return (
    <div className="mt-10 flex">
      {filteredTags.map((tag) => {
        return (
          <div
            key={tag}
            className="bg-blue-200 py-2 px-4 rounded-lg w-fit cursor-pointer"
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default TagsPage;
