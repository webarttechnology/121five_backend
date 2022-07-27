<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Photographer;
class Gallery extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'url', 'image', 'photographer_id'];

    public function photographer(){
        return $this->belongsTo(Photographer::class);
    }
}
