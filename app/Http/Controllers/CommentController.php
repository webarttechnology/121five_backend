<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
class CommentController extends Controller
{
    
    public function commentCount(){
        return response() -> json(Comment::where('status', 1)-> count());
    }

    public function list(Request $request, $news_id){        
        return response()-> json(Comment::where('news_id', $news_id) -> where('status', 1)->with('news') -> get(), 200);
    }

    public function add(Request $request){           
            $Comment = Comment::create($request -> all());
            return response()-> json($Comment, 201);        
    }

    public function all(Request $request){
        return response()-> json(Comment::with('news') -> get(), 200);
    }

    public function update(Request $request){
        $Comment = Comment::find($request -> id);
        $Comment -> name = $request-> name;
        $Comment -> email_id = $request -> email_id;
        $Comment -> status = $request -> status;
        $Comment -> comments = $request -> comments;
        $Comment -> news_id = $Comment -> news_id;
        $Comment -> save();
        return response()-> json($Comment, 201);
    }

    public function changeStatus(Request $request){
        $Comment = Comment::find($request -> id);
        $Comment -> status = $request -> status;       
        $Comment -> save();
        return response()-> json($Comment, 201);
    }

    public function delete($id){
        $comment = Comment::find($id);
        $comment -> delete();
    }

}
