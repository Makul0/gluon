'use client'
import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../../app/firebaseconfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import {
    createUserWithEmailAndPassword,
    signOut,

} from 'firebase/auth';
import Link from 'next/link';
import { User as FirebaseUser } from 'firebase/auth';

interface UserData {
    name: string;
    email: string;
    place: string;
    bio: string;
}

 export const Profile = () => {
    const [email, ] = useState('');
    const [password, ] = useState('');
    const [user, setUser] = useState<UserData>({ name: '', email: '', place: '', bio: '' });
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    const fetchUserData = async (userId: string) => {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUser(docSnap.data() as UserData);
        } else {
            console.log("No such document!");
        }
    };

    const updateUserData = async (userId: string, userData: UserData) => {
        const docRef = doc(db, "users", userId);
        await setDoc(docRef, userData, { merge: true });
        setEditing(false);
    };

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        // Example: You should retrieve this userId from your authentication context or state
        const userId = "user-id-from-auth";  // This should be a string, coming from authentication state
        fetchUserData(userId);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };
    

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error logging OUT:", error.message);
            } else {
                console.error("An unknown error occurred.");
            }
        }
    };

    return (
        <div>
            <button onClick={togglePanel} className="text-black ">
                {isOpen ? 'Close' : 'Profile'}
            </button>
            {isOpen && (
                <div ref={panelRef} className="fixed top-0 left-0 h-full bg-gray-100 shadow-xl z-40 transform translate-x-0 transition-transform duration-300 ease-in-out" style={{ width: '300px' }}>
                    <div className="p-5">
                        <h2 className="text-lg font-semibold">User Information</h2>
                        {isEditing ? (
                            <div>
                                <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
                                <input type="text" name="place" value={user.place} onChange={handleChange} placeholder="Place" />
                                <input type="text" name="bio" value={user.bio} onChange={handleChange} placeholder="Bio" />
                                <button onClick={() => updateUserData('user-id-from-auth', user)}>Save</button>
                            </div>
                        ) : (
                            <ul className="mt-4">
                                <li>Name: {user.name}</li>
                                <li>Email: {user.email}</li>  {/* Email can be managed via Firebase Auth */}
                                <li>Place: {user.place}</li>
                                <li>Bio: {user.bio}</li>
                                <button onClick={() => setEditing(true)}>Edit</button>
                                <li><Link href="/" >{user && <button onClick={logout}>Log Out</button>}</Link></li>
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
