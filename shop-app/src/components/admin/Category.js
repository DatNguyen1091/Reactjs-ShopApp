import React,{Component} from "react";
import Pagination from "../constants/Pagination.js";
import AdminNav from "../constants/AdminNav.js";

export class Category extends Component{
    render(){
        return(
            <div className="container-xxl">
                {/* NAV */}
                <AdminNav/>
                <div className="text-center"> 
                    <div className="d-inline-block">
                        <h1>DANH MỤC SẢN PHẨM</h1>
                    </div>
                </div>
                {/* Truyền hàm xử lý cho Pagination */}
                <div className="m-3">
                    <Pagination/>
                </div>
            </div>
        )
    }
}
export default Category;