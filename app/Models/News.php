<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Sponsor;
use App\Models\Comments;

class News extends Model
{
    use HasFactory;
    protected $fillable = ['category_id', 'sponser_id', 'publication_type_id', 'title', 'details', 'url', 'is_active', 'key_word', 'publish_date', 'image', 'is_headline'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function sponsor()
    {
        return $this->belongsTo(Sponsor::class, 'sponser_id');
    }

    public function comments()
    {
        return $this->hasMany(Comments::class, 'news_id');
    }
}
