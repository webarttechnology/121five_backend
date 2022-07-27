<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Contact;

class ContactController extends Controller
{
    
    public function Contact(){
        return response()-> json(Contact::get(), 200);
    }

    public function ContactById($id){
        return response()-> json(Contact::find($id), 200);
    }

    public function ContactSave(Request $request){
        $Contact = Contact::create($request -> all());
        return response()-> json($Contact, 201);
    }

    public function ContactUpdate(Request $request, $id){
        $Contact = Contact::find($id);
        $Contact -> title = $request-> title;
        $Contact -> description = $request -> description;
        $Contact -> save();
        return response()-> json($Contact, 201);
    }

    public function ContactDelete($id){
        $Contact = Contact::find($id);
        $Contact -> delete();
    }

    public function contactus(Request $request){
            
            $emailId = $request->input('email_id');        
            $mobile_no = $request -> input('mobile_no');
            $name = $request -> input('name');
            $message = $request -> input('message');
            $user = array('name' => $name, 'email_id' => $emailId, 'mobile_no'=> $mobile_no, 'c_message' => $message);
          
            $Status = Mail::send('mail.contact_us', $user, function ($message) use ($user) {
            $message->to('info@mypickmyvote.com', $user['email_id'])->subject('Customer Enquiry');
            $message->from('info@kibblegarden.mypickmyvote.com', '121five.com');
            });        
        $data['message']="Thanks for contact with us.";
        return response() -> json($data, 201);
    }
}