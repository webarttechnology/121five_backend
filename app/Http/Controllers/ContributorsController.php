<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Contributor;

class ContributorsController extends Controller
{
    public function Contributors(){
        return response()-> json(Contributor::get(), 200);
    }

    public function ContributorsById($id){
        return response()-> json(Contributor::find($id), 200);
    }

    public function ContributorsSave(Request $request){
        $image = $request -> all('image');   
        $file_name = $image['image'];
        $imageName = time().'.'.$file_name->getClientOriginalExtension();
        $file_name->move(public_path().'/uploads/', $imageName);  
        $Contributors = Contributor::create(['image' => 'uploads/'.$imageName, 'title' => $request -> input('title') , 'type' => $request -> input('type'), 'url' => $request -> input('url')]);
        return response()-> json($Contributors, 201);     
    }

    public function ContributorsUpdate(Request $request){        
        $Contributors = Contributor::find($request -> input('update_id'));
        if($request->file('image')){
            $image = $request -> all('image');   
            $file_name = $image['image'];
            $imageName = time().'.'.$file_name->getClientOriginalExtension();
            $file_name->move(public_path().'/uploads/', $imageName);
            $Contributors ->fill([
                'url' => $request -> input('url'),
                'type' => $request -> input('type'),
                'image' => 'uploads/'.$imageName,
             ]);      
        }else{
            $Contributors ->fill([
                'url' => $request -> input('url'),
                'type' => $request -> input('type'),
             ]);
        }    

        $Contributors -> save();
        return response()-> json($Contributors, 201);
    }

    public function ContributorsDelete($id){
        $Contributors = Contributor::find($id);
        $Contributors -> delete();
    }
}