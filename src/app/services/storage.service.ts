import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // Create
  public set(key: string, value: any): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        resolve(); // Operation succeeded
      } catch (error) {
        reject(error); // Operation failed
      }
    });
  }

  // Read
  public get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const value = localStorage.getItem(key);
        resolve(value ? JSON.parse(value) : null);
      } catch (error) {
        reject(error);
      }
    });
  }

  // Update (Overwrites completely)
  public update(key: string, value: any): Promise<void> {
    return this.set(key, value);
  }

  // Delete
  public remove(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  // Clear all storage
  public clear(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.clear();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
