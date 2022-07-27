<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\SponsorController;
use App\Http\Controllers\InstituteController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\PhotographerController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\FeaturesController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ContributorsController;
use App\Http\Controllers\CommentController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/comments/count', [CommentController::class, 'commentCount']);
Route::get('/comments/{news_id}', [CommentController::class, 'list']);
Route::post('/comments', [CommentController::class, 'add']);
Route::get('/comments', [CommentController::class, 'all']);
Route::put('/comments', [CommentController::class, 'update']);
Route::put('/change-status', [CommentController::class, 'changeStatus']);
Route::delete('/comments/{id}', [CommentController::class, 'delete']);

Route::get('/about', [AboutController::class, 'about']);
Route::get('/about/{id}', [AboutController::class, 'aboutById']);
Route::post('/about', [AboutController::class, 'aboutSave']);
Route::put('/about/{id}', [AboutController::class, 'aboutUpdate']);
Route::delete('/about/{id}', [AboutController::class, 'aboutDelete']);

Route::get('/contact', [ContactController::class, 'contact']);
Route::get('/contact/{id}', [ContactController::class, 'contactById']);
Route::post('/contact', [ContactController::class, 'contactSave']);
Route::put('/contact/{id}', [ContactController::class, 'contactUpdate']);
Route::delete('/contact/{id}', [ContactController::class, 'contactDelete']);
Route::post('/contact-us', [ContactController::class, 'contactus']);

Route::get('/category', [CategoryController::class, 'category']);
Route::get('/category/{id}', [CategoryController::class, 'categoryById']);
Route::post('/category', [CategoryController::class, 'categorySave']);
Route::put('/category/{id}', [CategoryController::class, 'categoryUpdate']);
Route::delete('/category/{id}', [CategoryController::class, 'categoryDelete']);



Route::get('/news-publish-date', [NewsController::class, 'NewswithActiveDate']);
Route::get('/all-news', [NewsController::class, 'AllNews']);
Route::get('/all-news/{to}', [NewsController::class, 'AllNewswithlimit']);

Route::get('/news/count', [NewsController::class, 'newsCount']);
Route::get('/news/pending/count', [NewsController::class, 'pendingNewsCount']);
Route::get('/news', [NewsController::class, 'news']);
Route::get('/news/{id}', [NewsController::class, 'newsById']);
Route::post('/news', [NewsController::class, 'newsSave']);
Route::post('/news/update', [NewsController::class, 'newsUpdate']);
Route::delete('/news/{id}', [NewsController::class, 'newsDelete']);

// Route::get('/checkpayment/{id}', [NewsController::class, 'checkpayment']);

Route::get('/features', [FeaturesController::class, 'Feature']);
Route::get('/features/{id}', [FeaturesController::class, 'FeatureById']);
Route::post('/features', [FeaturesController::class, 'FeatureSave']);
Route::post('/features/update', [FeaturesController::class, 'FeatureUpdate']);
Route::delete('/features/{id}', [FeaturesController::class, 'FeatureDelete']);

Route::get('/sponsor/count', [SponsorController::class, 'SponsorCount']);
Route::get('/sponsor', [SponsorController::class, 'sponsor']);
Route::get('/sponsor/{id}', [SponsorController::class, 'sponsorById']);
Route::post('/sponsor', [SponsorController::class, 'sponsorSave']);
Route::put('/sponsor/{id}', [SponsorController::class, 'sponsorUpdate']);
Route::delete('/sponsor/{id}', [SponsorController::class, 'sponsorDelete']);

Route::post('/sponsor-login', [SponsorController::class, 'login']);


Route::get('/institute', [InstituteController::class, 'Institute']);
Route::get('/institute/{id}', [InstituteController::class, 'InstituteById']);
Route::post('/institute', [InstituteController::class, 'InstituteSave']);
Route::put('/institute/{id}', [InstituteController::class, 'InstituteUpdate']);
Route::delete('/institute/{id}', [InstituteController::class, 'InstituteDelete']);

Route::get('/slider', [SliderController::class, 'Slider']);
Route::get('/slider/{id}', [SliderController::class, 'SliderById']);
Route::post('/slider', [SliderController::class, 'SliderSave']);
Route::post('/slider/update', [SliderController::class, 'SliderUpdate']);
Route::delete('/slider/{id}', [SliderController::class, 'SliderDelete']);

Route::get('/gallery', [GalleryController::class, 'Gallery']);
Route::get('/gallery/{id}', [GalleryController::class, 'GalleryById']);
Route::get('/gallery-image/{id}', [GalleryController::class, 'GalleryByPhotographerID']);

Route::post('/gallery', [GalleryController::class, 'GallerySave']);
Route::post('/gallery/update', [GalleryController::class, 'GalleryUpdate']);
Route::delete('/gallery/{id}', [GalleryController::class, 'GalleryDelete']);


Route::get('/banner', [BannerController::class, 'Banner']);
Route::get('/banner/{id}', [BannerController::class, 'BannerById']);
Route::post('/banner', [BannerController::class, 'BannerSave']);
Route::post('/banner/update', [BannerController::class, 'BannerUpdate']);

Route::delete('/banner/{id}', [BannerController::class, 'BannerDelete']);



Route::get('/photographer', [PhotographerController::class, 'Photographer']);
Route::get('/photographer/{id}', [PhotographerController::class, 'PhotographerById']);
Route::post('/photographer', [PhotographerController::class, 'PhotographerSave']);
Route::put('/photographer/{id}', [PhotographerController::class, 'PhotographerUpdate']);
Route::delete('/photographer/{id}', [PhotographerController::class, 'PhotographerDelete']);

Route::get('/company', [CompanyController::class, 'Company']);
Route::get('/company/{id}', [CompanyController::class, 'CompanyById']);
Route::post('/company/update', [CompanyController::class, 'CompanyUpdate']);

Route::get('/subscription', [SubscriptionController::class, 'Subscription']);
Route::post('/subscription', [SubscriptionController::class, 'SubscriptionSave']);
Route::get('/subscription/{id}', [SubscriptionController::class, 'SubscriptionById']);
Route::put('/subscription/{id}', [SubscriptionController::class, 'SubscriptionUpdate']);
Route::delete('/subscription/{id}', [SubscriptionController::class, 'SubscriptionDelete']);


Route::get('/contributors', [ContributorsController::class, 'Contributors']);
Route::post('/contributors', [ContributorsController::class, 'ContributorsSave']);
Route::get('/contributors/{id}', [ContributorsController::class, 'ContributorsById']);
Route::post('/contributors/update', [ContributorsController::class, 'ContributorsUpdate']);
Route::delete('/contributors/{id}', [ContributorsController::class, 'ContributorsDelete']);

Route::get('/payment', [PaymentController::class, 'Payment']);
Route::post('/payment', [PaymentController::class, 'PaymentSave']);
Route::get('/payment/{id}', [PaymentController::class, 'PaymentById']);
Route::put('/payment/{id}', [PaymentController::class, 'PaymentUpdate']);
Route::delete('/payment/{id}', [PaymentController::class, 'PaymentDelete']);

Route::post('/register', [UserController::class, 'register']);

Route::post('/login', [UserController::class, 'login']);



Route::get('/type', [NewsController::class, 'type']);
Route::get('/headline', [NewsController::class, 'headline']);
Route::get('/get-sponsor-post/{sponsor_id}', [NewsController::class, 'getSponsorPost']);
Route::get('/get-sponsor-count/{sponsor_id}', [NewsController::class, 'getSponsorPostCount']);
Route::get('/get-category-post/{category_id}', [NewsController::class, 'getCategoryPost']);
Route::post('/get-search-post', [NewsController::class, 'getSearchPost']);