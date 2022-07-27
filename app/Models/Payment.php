<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Sponsor;
use App\Models\Subscription;
class Payment extends Model
{
    use HasFactory;
    protected $fillable = ['sponsor_id', 'subscription_id', 'valid_for', 'booking_date', 'expiry_date', 'is_paid', 'amount', 'payment_date', 'max_post'];
    
    public function sponsor(){
        return $this->belongsTo(Sponsor::class, 'sponsor_id');
    }

    public function subscription(){
        return $this->belongsTo(Subscription::class, 'subscription_id');
    }
}