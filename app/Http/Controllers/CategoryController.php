<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Category;

class CategoryController extends Controller
{
    public function Category(){
        return response()-> json(Category::get(), 200);
    }

    public function CategoryById($id){
        return response()-> json(Category::find($id), 200);
    }

    public function CategorySave(Request $request){
        if(Category::where('name', $request -> input('name')) -> count() == 0){
            $Category = Category::create($request -> all());
            return response()-> json($Category, 201);
        }else{
            return response()-> json('Category name already exists', 200);
        }
        
    }

    public function CategoryUpdate(Request $request, $id){
        $Category = Category::find($id);
        $Category -> name = $request-> name;
        $Category -> is_show = $request -> is_show;
        $Category -> save();
        return response()-> json($Category, 201);
    }

    public function CategoryDelete($id){
        $Category = Category::find($id);
        $Category -> delete();
    }
}
