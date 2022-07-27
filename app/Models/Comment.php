<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\News;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'name', 'email_id', 'comments', 'news_id', 'status'];

    public function news()
    {
        return $this->belongsTo(News::class, 'news_id');
    }
}
