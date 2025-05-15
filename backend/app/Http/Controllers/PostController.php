<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {
        $posts = auth()->user()->posts()->latest()->paginate(5);

        return (PostResource::collection($posts));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string'
        ]);
        $data['slug'] = Str::slug($data['title']);

        auth()->user()->posts()->create($data);

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully'
        ], status: 201);
    }

    public function show($slug)
    {
        $post = Post::where('slug', $slug)->firstOrFail();
        return new PostResource($post);
    }

    public function update(Request $request, $slug)
    {
        $post = Post::where('slug', $slug)->firstOrFail();
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string'
        ]);
        $data['slug'] = Str::slug($data['title']);

        $post->update($data);
        return new PostResource($post);
    }

    public function destroy($slug)
    {
        $post = Post::where('slug', $slug)->firstOrFail();
        $post->delete();
        return response(null, 204);
    }
}
