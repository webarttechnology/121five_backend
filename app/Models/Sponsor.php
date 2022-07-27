<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Sponsor extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'password', 'company_name', 'email_id', 'mobile_no', 'address', 'url', 'new_password', 'is_active'];
   
    public function news()
    {
        return $this->hasMany(News::class, 'sponser_id');
    }
}
