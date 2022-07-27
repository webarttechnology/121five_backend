<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Gallery;
class Photographer extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'company_name', 'email_id', 'mobile_no', 'address', 'url'];

    public function gallery()
    {
        return $this->hasMany(Gallery::class, 'photographer_id');
    }
}
