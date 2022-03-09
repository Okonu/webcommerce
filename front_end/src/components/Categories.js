import React from 'react'
import { listProductCategories } from '../actions/productActions';

export const Categories = () => {
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
      categories,
    } = productCategoryList;
    useEffect(() => {
      dispatch(listProductCategories());
    }, [dispatch]);
    return (
       <div>
            <ul >
                  { (
                    categories.map((c) => (
                      <li key={c}>
                        <Link
                          to={`/search/category/${c}`}
                          onClick={() => setSidebarIsOpen(false)}
                        >
                          {c}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>

       </div>
                
            
    )
}
