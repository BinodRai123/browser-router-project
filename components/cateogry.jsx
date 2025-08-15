import { useState } from "react";

const categories = [
  {
    name: "Electronics",
    sub: ["Mobile Phones", "Laptops", "Cameras", "Accessories"],
  },
  {
    name: "Clothing & Accessories",
    sub: ["Men’s Clothing", "Women’s Clothing", "Shoes", "Accessories"],
  },
  {
    name: "Home & Kitchen",
    sub: ["Furniture", "Kitchenware", "Home Decor"],
  },
  {
    name: "Beauty & Health",
    sub: ["Skincare", "Makeup", "Personal Care"],
  },
  {
    name: "Sports & Outdoors",
    sub: ["Fitness Equipment", "Camping & Hiking", "Sportswear"],
  },
  {
    name: "Books & Stationery",
    sub: ["Fiction", "Non-fiction", "Office Supplies"],
  },
];

const Category = ({onSelect}) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className="w-64">
      <label className="block mb-1 font-medium">Category</label>
      <select
        value={selected}
        onChange={handleChange}
        className="w-full bg-gray-800 border px-3 py-2 rounded"
      >
        <option value="">Select a category</option>
        {categories.map((cat, idx) => (
          <optgroup key={idx} label={cat.name}>
            {cat.sub.map((sub, subIdx) => (
              <option key={subIdx} value={`${cat.name} > ${sub}`}>
                {sub}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      {selected && <p className="mt-2 text-gray-600">Selected: {selected}</p>}
    </div>
  );
}

export default Category