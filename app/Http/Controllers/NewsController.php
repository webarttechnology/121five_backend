<?php
namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\News;
use App\Models\Publication_type;
use Illuminate\Http\Client\ResponseSequence;
use App\Models\Payment;

class NewsController extends Controller
{

    public function newsCount(){
        return response() -> json(News::where('is_active', 1)-> count());
    }

    public function pendingNewsCount(){
        return response() -> json(News::where('is_active', 0)-> count());
    }

    public function headline(){
        return response()->json(News::where('is_headline', 1)->orderBy('id', 'desc') ->take(20)-> get(), 200);
    }

    public function type()
    {
        return response()->json(Publication_type::get(), 200);
    }

    public function NewswithActiveDate()
    {      
        $dataArray = [];
        $news = News::where('publish_date', '<=', date('Y-m-d')) -> with('category')->with('sponsor')->orderBy('publish_date', 'DESC')->get(); 
         
        foreach($news as $v__new){
            $dataArray[] = [
                'id' => $v__new -> id,
                'category_id' => $v__new -> category_id,
                'sponser_id' => $v__new -> sponser_id,
                'title' => $v__new -> title,
                'url' => $v__new -> url,
                'image' => json_decode($v__new -> image),
                'publication_type_id' => $v__new -> publication_type_id,
                'key_word' => $v__new -> key_word,
                'is_active' => $v__new -> is_active,
                'publish_date' => $v__new -> publish_date,
                'is_headline' => $v__new -> is_headline,
                'details' => $v__new -> details,
                'created_at' => $v__new -> created_at,
                'updated_at' => $v__new -> updated_at,
                'category' => [
                    'id' => $v__new -> category -> id,
                    'name' => $v__new -> category -> name
                ],

                'sponsor' => [
                    'id' => $v__new -> sponsor -> id,
                    'name' => $v__new -> sponsor -> name,
                    'company_name' => $v__new -> sponsor-> company_name,
                    'email_id' => $v__new -> sponsor-> email_id,
                    'mobile_no' => $v__new -> sponsor -> mobile_no,
                    'address' => $v__new -> sponsor-> address,
                    'url' => $v__new -> sponsor-> url,
                ],

            ];                 
        }

        return response()->json($dataArray, 200);
    }

    public function News()
    {      
        $dataArray = [];
        $news = News::with('category')->with('sponsor')->orderBy('publish_date', 'DESC')->get(); 
         
        foreach($news as $v__new){
          
            $dataArray[] = [
                'id' => $v__new -> id,
                'category_id' => $v__new -> category_id,
                'sponser_id' => $v__new -> sponser_id,
                'title' => $v__new -> title,
                'url' => $v__new -> url,
                'image' => json_decode($v__new -> image),
                'publication_type_id' => $v__new -> publication_type_id,
                'key_word' => $v__new -> key_word,
                'is_active' => $v__new -> is_active,
                'publish_date' => $v__new -> publish_date,
                'is_headline' => $v__new -> is_headline,
                'details' => $v__new -> details,
                'created_at' => $v__new -> created_at,
                'updated_at' => $v__new -> updated_at,
                'category' => [
                    'id' => $v__new -> category -> id,
                    'name' => $v__new -> category -> name
                ],

                'sponsor' => [
                    'id' => $v__new -> sponsor -> id,
                    'name' => $v__new -> sponsor -> name,
                    'company_name' => $v__new -> sponsor-> company_name,
                    'email_id' => $v__new -> sponsor-> email_id,
                    'mobile_no' => $v__new -> sponsor -> mobile_no,
                    'address' => $v__new -> sponsor-> address,
                    'url' => $v__new -> sponsor-> url,
                ],

            ];                 
        }

        return response()->json($dataArray, 200);
    }

    public function AllNewswithlimit(Request $request, $to)
    {      
        $dataArray = [];
        $news = News::take($to)->with('category')->with('sponsor')->orderBy('publish_date', 'DESC')->get(); 
         
        foreach($news as $v__new){
          
            $dataArray[] = [
                'id' => $v__new -> id,
                'category_id' => $v__new -> category_id,
                'sponser_id' => $v__new -> sponser_id,
                'title' => $v__new -> title,
                'url' => $v__new -> url,
                'image' => json_decode($v__new -> image),
                'publication_type_id' => $v__new -> publication_type_id,
                'key_word' => $v__new -> key_word,
                'is_active' => $v__new -> is_active,
                'publish_date' => $v__new -> publish_date,
                'is_headline' => $v__new -> is_headline,
                'details' => $v__new -> details,
                'created_at' => $v__new -> created_at,
                'updated_at' => $v__new -> updated_at,
                'category' => [
                    'id' => $v__new -> category -> id,
                    'name' => $v__new -> category -> name
                ],

                'sponsor' => [
                    'id' => $v__new -> sponsor -> id,
                    'name' => $v__new -> sponsor -> name,
                    'company_name' => $v__new -> sponsor-> company_name,
                    'email_id' => $v__new -> sponsor-> email_id,
                    'mobile_no' => $v__new -> sponsor -> mobile_no,
                    'address' => $v__new -> sponsor-> address,
                    'url' => $v__new -> sponsor-> url,
                ],

            ];                 
        }

        return response()->json($dataArray, 200);
    }


    public function AllNews()
    {      
        $dataArray = [];
        $news = News::with('category')->with('sponsor')->orderBy('publish_date', 'DESC')->get(); 
         
        foreach($news as $v__new){
          
            $dataArray[] = [
                'id' => $v__new -> id,
                'category_id' => $v__new -> category_id,
                'sponser_id' => $v__new -> sponser_id,
                'title' => $v__new -> title,
                'url' => $v__new -> url,
                'image' => json_decode($v__new -> image),
                'publication_type_id' => $v__new -> publication_type_id,
                'key_word' => $v__new -> key_word,
                'is_active' => $v__new -> is_active,
                'publish_date' => $v__new -> publish_date,
                'is_headline' => $v__new -> is_headline,
                'details' => $v__new -> details,
                'created_at' => $v__new -> created_at,
                'updated_at' => $v__new -> updated_at,
                'category' => [
                    'id' => $v__new -> category -> id,
                    'name' => $v__new -> category -> name
                ],

                'sponsor' => [
                    'id' => $v__new -> sponsor -> id,
                    'name' => $v__new -> sponsor -> name,
                    'company_name' => $v__new -> sponsor-> company_name,
                    'email_id' => $v__new -> sponsor-> email_id,
                    'mobile_no' => $v__new -> sponsor -> mobile_no,
                    'address' => $v__new -> sponsor-> address,
                    'url' => $v__new -> sponsor-> url,
                ],

            ];                 
        }

        return response()->json($dataArray, 200);
    }

    public function NewsById($id)
    {

        $news = News::where('id', $id)->with('sponsor') -> first();
        $news -> image = json_decode($news -> image);
        return response()->json($news, 200);
    }

    // public function checkpayment($id){
    //     $sub_Count = Payment::where('sponsor_id', $id)->where('is_paid', 1)->whereDate('expiry_date', '>', date('Y-m-d', time()));       
    //     return response()->json($sub_Count, 201);    
    // }

    public function NewsSave(Request $request)
    {        
        
            $news = News::where('sponser_id', $request->input('sponser_id')) -> count();          
            $img = $request->all('image');

            foreach($img['image'] as $image){               
                $file_name = $image;
                $imageName = time() .rand(1000,9999).'.' . $file_name->getClientOriginalExtension();
                $file_name->move(public_path() . '/uploads/', $imageName);
                $imageArray[] = 'uploads/' . $imageName;
            }

            $insertData = [
                'sponser_id' => $request->input('sponser_id'),
                'category_id' => $request->input('category_id'),
                'publication_type_id' => $request->input('publication_type_id'),
                'title' => $request->input('title'),
                'details' => $request->input('details'),
                'url' => $request->input('url'),
                'key_word' => $request->input('key_word'),
                'is_active' => $request->input('is_active'),
                'image' => json_encode($imageArray),
                'publish_date' => $request->input('publish_date')?$request->input('publish_date'):date('Y-m-d', time()),
                'is_headline' => $request -> input('is_headline')?$request -> input('is_headline'):0
            ];

            $News = News::create($insertData);
            $News['message'] ="Post added successfully.";
            return response()->json($News, 201);
       
    }

    public function NewsUpdate(Request $request)
    {
        $News = News::find($request->input('update_id'));
        if ($request->file('image')) {
            $img = $request->all('image'); 
            $imageArray = [];       
            $i = 0;           
            foreach($img['image'] as $image){               
                $file_name = $image;
                $imageName = time() .rand(1000,9999).'.' . $file_name->getClientOriginalExtension();
                $file_name->move(public_path() . '/uploads/', $imageName);
                $imageArray[] = 'uploads/' . $imageName;
            } 

            $News->fill([
                'category_id' => $request->input('category_id'),
                'sponser_id' => $request->input('sponser_id'),
                'publication_type_id' => $request->input('publication_type_id'),
                'title' => $request->input('title'),
                'details' => $request->input('details'),
                'is_active' => $request->input('is_active'),
                'url' => $request->input('url'),
                'key_word' => $request->input('key_word'),
                'publish_date' => $request->input('publish_date')?$request->input('publish_date'):date('Y-m-d', time()),
                'image' => json_encode($imageArray),
                'is_headline' => $request -> input('is_headline')?$request -> input('is_headline'):0
            ]);
        } else {
            $News->fill([
                'category_id' => $request->input('category_id'),
                'sponser_id' => $request->input('sponser_id'),
                'publication_type_id' => $request->input('publication_type_id'),
                'title' => $request->input('title'),
                'details' => $request->input('details'),
                'is_active' => $request->input('is_active'),
                'url' => $request->input('url'),
                'key_word' => $request->input('key_word'),
                'publish_date' => $request->input('publish_date')?$request->input('publish_date'):date('Y-m-d', time()),
                'is_headline' => $request -> input('is_headline')?$request -> input('is_headline'):0
            ]);
        }

        $News->save();
        return response()->json($News, 201);
    }

    public function NewsDelete($id)
    {
        $News = News::find($id);
        $News->delete();
    }

    public function getSponsorPost($sponsor_id)
    {
        $dataArray = [];
        $post = News::where('sponser_id', $sponsor_id)->get();
         foreach($post as $v__new){          
            $dataArray[] = [
                'id' => $v__new -> id,
                'category_id' => $v__new -> category_id,
                'sponser_id' => $v__new -> sponser_id,
                'title' => $v__new -> title,
                'url' => $v__new -> url,
                'image' => json_decode($v__new -> image),
                'publication_type_id' => $v__new -> publication_type_id,
                'key_word' => $v__new -> key_word,
                'is_active' => $v__new -> is_active,
                'publish_date' => $v__new -> publish_date,
                'details' => $v__new -> details,
                'created_at' => $v__new -> created_at,
                'updated_at' => $v__new -> updated_at,
            ];                 
        }
        return response()->json($dataArray, 201);
    }

    public function getSponsorPostCount($sponsor_id)
    {
        $totalArray = [];
        $totalArray['published'] = $totalArray['unpublished'] = 0;
        $post = News::groupBy('is_active')
            ->selectRaw('count(*) as totalCount, is_active as status')
            ->where('sponser_id', $sponsor_id)->get();

        foreach ($post as $v__l) {
            if ($v__l['status'] == 1) {
                $totalArray['published'] = $v__l['totalCount'];
            } else if ($v__l['status'] == 0) {
                $totalArray['unpublished'] = $v__l['totalCount'];
            }
        }

        return response()->json((object)$totalArray, 201);
    }

    public function getCategoryPost($category_id)
    {
        $post = News::where('category_id', $category_id)->get();
        $dataArray = [];
        foreach($post as $v__new){
          
            $dataArray[] = [
                'id' => $v__new -> id,
                'category_id' => $v__new -> category_id,
                'sponser_id' => $v__new -> sponser_id,
                'title' => $v__new -> title,
                'url' => $v__new -> url,
                'image' => json_decode($v__new -> image),
                'publication_type_id' => $v__new -> publication_type_id,
                'key_word' => $v__new -> key_word,
                'is_active' => $v__new -> is_active,
                'publish_date' => $v__new -> publish_date,
                'details' => $v__new -> details,
                'created_at' => $v__new -> created_at,
                'updated_at' => $v__new -> updated_at,
            ];                 
        }


        return response()->json($dataArray, 201);
    }

    public function getSearchPost(Request $request)
    {
        $dataArray = [];
        $conditionArray = [];
        $query = News::where($conditionArray);
        
        if ($request->input('company_id') != '') {
            $query = $query->where(['company_id' => $request->input('company_id')]);
        }

        if ($request->input('publication_type_id') != '') {
            $query = $query->where(['publication_type_id' => 1]);
        }

        if ($request->input('category_id') != '' && $request->input('category_id') != 1) {
            $query = $query->where(['category_id' => 1]);
        }

        if ($request->input('key_word') != '') {
            $query = $query->where('key_word', 'like', '%' .$request->input('key_word'). '%') ->orWhere('title', 'like', '%' . $request->input('key_word'). '%') ->orWhere('details', 'like', '%' .$request->input('key_word'). '%');
        }

        if ($request->input('starting_date') != '' && $request->input('ending_date') != '') {
            $query = $query->whereBetween('created_at', array($request->input('starting_date'), $request->input('ending_date')));
        }       

        $p__details = $query->get();

          foreach($p__details as $v__new){
          
            $dataArray[] = [
                'id' => $v__new -> id,
                'category_id' => $v__new -> category_id,
                'sponser_id' => $v__new -> sponser_id,
                'title' => $v__new -> title,
                'url' => $v__new -> url,
                'image' => json_decode($v__new -> image),
                'publication_type_id' => $v__new -> publication_type_id,
                'key_word' => $v__new -> key_word,
                'is_active' => $v__new -> is_active,
                'publish_date' => $v__new -> publish_date,
                'details' => $v__new -> details,
                'created_at' => $v__new -> created_at,
                'updated_at' => $v__new -> updated_at,
            ];                 
        }


        return response()->json($dataArray, 201);
    }
}